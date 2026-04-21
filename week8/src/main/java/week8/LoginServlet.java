package week8;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html"); // IMPORTANT

        String username = request.getParameter("username");

        // 🔹 Create session
        HttpSession session = request.getSession();
        session.setAttribute("user", username);

        // 🔹 Create cookie
        Cookie cookie = new Cookie("username", username);
        cookie.setMaxAge(60 * 60); // 1 hour
        response.addCookie(cookie);

        // 🔹 Response
        response.getWriter().println("<h2>Login Successful!</h2>");
        response.getWriter().println("<a href='home'>Go to Home</a>");
    }
}