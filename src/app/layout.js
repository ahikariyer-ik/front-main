import { Plus_Jakarta_Sans } from 'next/font/google'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/materialdesignicons.min.css"
import "./assets/scss/style.scss"

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight:["200","300","400","500","600","700","800"],
  variable: '--font-jakarta',
  })

export const metadata = {
  title: 'Ahikurumsal - Dijital İnsan Kaynakları ve Kurum Yönetiminiz Bir Arada',
  description: 'Ahikurumsal - Dijital İnsan Kaynakları ve Kurum Yönetiminiz Bir Arada',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>{children}</body>
    </html>
  )
}
