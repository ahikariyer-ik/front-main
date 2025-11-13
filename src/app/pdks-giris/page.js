'use client';

import { useEffect, useState, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import axios from 'axios';
import Navbar from '../componants/navbar';
import Footer from '../componants/footer';

export default function PDKSGiris() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [checkType, setCheckType] = useState('in'); // 'in' or 'out'
  const [location, setLocation] = useState(null);
  const html5QrCodeRef = useRef(null);
  const scannerElementId = 'qr-reader';

  useEffect(() => {
    // Get geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.warn('Konum alınamadı:', error);
        }
      );
    }

    return () => {
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current.stop().catch(err => console.error('Stop error:', err));
      }
    };
  }, []);

  const startScanning = async () => {
    try {
      setError(null);
      setResult(null);
      
      // Check camera permission
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError('Tarayıcınız kamera erişimini desteklemiyor');
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop()); // Stop the test stream
      
      setCameraPermission(true);
      setScanning(true);

      const html5QrCode = new Html5Qrcode(scannerElementId);
      html5QrCodeRef.current = html5QrCode;

      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 }
      };

      await html5QrCode.start(
        { facingMode: 'environment' },
        config,
        onScanSuccess,
        onScanError
      );
    } catch (err) {
      console.error('Start scanning error:', err);
      setCameraPermission(false);
      setError('Kamera erişimi reddedildi veya hata oluştu: ' + err.message);
      setScanning(false);
    }
  };

  const stopScanning = async () => {
    if (html5QrCodeRef.current) {
      try {
        await html5QrCodeRef.current.stop();
        html5QrCodeRef.current = null;
        setScanning(false);
      } catch (err) {
        console.error('Stop scanning error:', err);
      }
    }
  };

  const onScanSuccess = async (decodedText, decodedResult) => {
    console.log('QR Code scanned:', decodedText);
    
    // Stop scanning immediately
    await stopScanning();

    // Process the QR code
    await processQRCode(decodedText);
  };

  const onScanError = (errorMessage) => {
    // Ignore scan errors (they happen continuously while scanning)
  };

  const processQRCode = async (qrData) => {
    try {
      setLoading(true);
      setError(null);

      // Parse QR code data
      let sessionToken;
      try {
        const parsedData = JSON.parse(qrData);
        sessionToken = parsedData.token;
      } catch {
        // If not JSON, assume it's the token itself
        sessionToken = qrData;
      }

      if (!sessionToken) {
        throw new Error('Geçersiz QR kod formatı');
      }

      // Get token from localStorage (worker must be logged in)
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Giriş yapmanız gerekiyor. Lütfen önce oturum açın.');
      }

      // API call to check in/out
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
      const response = await axios.post(
        `${apiUrl}/api/pdks-attendances/check`,
        {
          sessionToken,
          checkType,
          latitude: location?.latitude,
          longitude: location?.longitude
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setResult({
        success: true,
        message: response.data.data.message,
        checkType: response.data.data.checkType,
        checkTime: response.data.data.checkTime,
        worker: response.data.data.worker
      });

    } catch (err) {
      console.error('Process QR code error:', err);
      setResult(null);
      setError(
        err.response?.data?.error?.message || 
        err.message || 
        'QR kod işlenirken hata oluştu'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <>
      <Navbar navClass="defaultscroll sticky" navLight={false} />
      
      <section className="bg-half-170 d-table w-100" style={{ background: 'linear-gradient(to bottom, #0056b3, #003d82)' }}>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h1 className="heading fw-bold text-white mb-3">PDKS Giriş-Çıkış</h1>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  QR kodu okutarak giriş veya çıkış yapabilirsiniz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              
              {/* Check Type Selection */}
              {!scanning && !result && !loading && (
                <div className="card border-0 shadow rounded-3 mb-4">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-4">İşlem Türü Seçin</h5>
                    <div className="d-flex gap-3 justify-content-center">
                      <button
                        className={`btn btn-lg ${checkType === 'in' ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={() => setCheckType('in')}
                        style={{ minWidth: '150px' }}
                      >
                        <i className="mdi mdi-login me-2"></i>
                        Giriş
                      </button>
                      <button
                        className={`btn btn-lg ${checkType === 'out' ? 'btn-warning' : 'btn-outline-warning'}`}
                        onClick={() => setCheckType('out')}
                        style={{ minWidth: '150px' }}
                      >
                        <i className="mdi mdi-logout me-2"></i>
                        Çıkış
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* QR Scanner */}
              <div className="card border-0 shadow rounded-3">
                <div className="card-body p-4">
                  
                  {!scanning && !result && !loading && (
                    <div className="text-center">
                      <div id={scannerElementId} style={{ display: 'none' }}></div>
                      <div className="mb-4">
                        <i className="mdi mdi-qrcode-scan" style={{ fontSize: '100px', color: '#0056b3' }}></i>
                      </div>
                      <h5 className="mb-3">
                        {checkType === 'in' ? 'Giriş' : 'Çıkış'} için QR Kod Okutun
                      </h5>
                      <p className="text-muted mb-4">
                        QR kodu okutmak için kameranıza erişim izni vermeniz gerekebilir
                      </p>
                      {cameraPermission === false && (
                        <div className="alert alert-warning">
                          <i className="mdi mdi-alert me-2"></i>
                          Kamera erişimi reddedildi. Lütfen tarayıcı ayarlarından kamera iznini etkinleştirin.
                        </div>
                      )}
                      <button 
                        className="btn btn-primary btn-lg"
                        onClick={startScanning}
                      >
                        <i className="mdi mdi-camera me-2"></i>
                        QR Kod Okutmaya Başla
                      </button>
                    </div>
                  )}

                  {scanning && (
                    <div>
                      <div id={scannerElementId} className="mb-3"></div>
                      <div className="text-center">
                        <p className="text-muted mb-3">
                          QR kodu kameranıza tutun
                        </p>
                        <button 
                          className="btn btn-outline-danger"
                          onClick={stopScanning}
                        >
                          <i className="mdi mdi-stop me-2"></i>
                          İptal
                        </button>
                      </div>
                    </div>
                  )}

                  {loading && (
                    <div className="text-center py-5">
                      <div className="spinner-border text-primary mb-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="text-muted">İşleminiz gerçekleştiriliyor...</p>
                    </div>
                  )}

                  {result && (
                    <div className="text-center py-4">
                      <div className="mb-4">
                        <i 
                          className={`mdi ${result.checkType === 'in' ? 'mdi-check-circle' : 'mdi-logout'}`}
                          style={{ fontSize: '80px', color: result.checkType === 'in' ? '#28a745' : '#ffc107' }}
                        ></i>
                      </div>
                      <h4 className={`fw-bold mb-3 ${result.checkType === 'in' ? 'text-success' : 'text-warning'}`}>
                        {result.message}
                      </h4>
                      {result.worker && (
                        <p className="text-muted mb-1">
                          {result.worker.firstName} {result.worker.lastName}
                        </p>
                      )}
                      {result.checkTime && (
                        <p className="text-muted mb-4">
                          {new Date(result.checkTime).toLocaleString('tr-TR')}
                        </p>
                      )}
                      <button 
                        className="btn btn-primary"
                        onClick={handleReset}
                      >
                        <i className="mdi mdi-refresh me-2"></i>
                        Yeni İşlem
                      </button>
                    </div>
                  )}

                  {error && (
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                      <i className="mdi mdi-alert-circle me-2"></i>
                      <div>
                        {error}
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Info Card */}
              <div className="card border-0 bg-light mt-4">
                <div className="card-body p-4">
                  <h6 className="mb-3">
                    <i className="mdi mdi-information me-2"></i>
                    Bilgilendirme
                  </h6>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="mdi mdi-check-circle text-success me-2"></i>
                      QR kodu okutmadan önce giriş veya çıkış seçimi yapın
                    </li>
                    <li className="mb-2">
                      <i className="mdi mdi-check-circle text-success me-2"></i>
                      Kameranıza erişim izni vermeniz gerekir
                    </li>
                    <li className="mb-2">
                      <i className="mdi mdi-check-circle text-success me-2"></i>
                      QR kodu net bir şekilde kameraya tutun
                    </li>
                    <li className="mb-2">
                      <i className="mdi mdi-check-circle text-success me-2"></i>
                      Konum bilginiz kaydedilir (güvenlik için)
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}


