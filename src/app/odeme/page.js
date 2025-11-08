// src/app/odeme/page.js

"use client";
import React from "react";

export default function OdemeSayfasi() {
  const handleSubmit = () => {
    const onay = document.getElementById("sozlesmeOnay");
    if (onay && onay.checked) {
      alert("Havale bilgileri gösterildi. Sizi yönlendiriyoruz...");
      window.location.href = "ilanlar"; // bu sayfa yoksa sonra oluşturabiliriz
    } else {
      alert("Devam etmek için hizmet sözleşmesini kabul etmelisiniz.");
    }
  };

  return (
    <main className="container" style={{ padding: "2rem" }}>
      <h1>Havale ile Ödeme</h1>
      <p>Lütfen aşağıdaki IBAN numarasına havale yapınız:</p>
      <p><strong>Banka Adı:</strong> Kuveyt Türk Bankası</p>
      <p><strong>IBAN:</strong> TR45 0020 5000 0975 8542 2000 01</p>
      <p><strong>Alıcı Adı:</strong> Nazif Burak Tekinalp</p>
      <p><strong>Açıklama:</strong> Ad Soyad + Plan Adı (örn: Ahmet Yılmaz - Temel Destek Paketi)</p>

      <div style={{ marginTop: "1rem" }}>
        <input type="checkbox" id="sozlesmeOnay" />
        <label htmlFor="sozlesmeOnay"> Hizmet sözleşmesini okudum, kabul ediyorum.</label>
      </div>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Sözleşmeyi kabul ediyorum ve havale ile devam et
      </button>
    </main>
  );
}
