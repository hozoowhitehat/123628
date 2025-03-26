import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val webView: WebView = findViewById(R.id.webview)
        webView.settings.javaScriptEnabled = true // Aktifkan JavaScript
        webView.webViewClient = WebViewClient() // Biarkan WebView menangani URL
        
        // Muat file HTML dari folder assets
        webView.loadUrl("file:///android_asset/hozoo.html")
    }
}
