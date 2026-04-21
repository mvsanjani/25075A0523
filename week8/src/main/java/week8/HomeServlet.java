package week8;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpSession;

@WebServlet("/home")
public class HomeServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");

        // 🔹 Get session
        HttpSession session = request.getSession(false);
        String user = (session != null) ? (String) session.getAttribute("user") : "No Session";

        // 🔹 Get cookies
        Cookie[] cookies = request.getCookies();
        String cookieUser = "Not Found";

        if (cookies != null) {
            for (Cookie c : cookies) {
                if (c.getName().equals("username")) {
                    cookieUser = c.getValue();
                }
            }
        }

        // 🔹 Display
        response.getWriter().println("<h2>Welcome</h2>");
        response.getWriter().println("Session User: " + user + "<br>");
        response.getWriter().println("Cookie User: " + cookieUser + "<br><br>");

        response.getWriter().println("<a href='logout'>Logout</a>");
    }
}