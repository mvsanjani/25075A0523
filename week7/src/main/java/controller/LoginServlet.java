package controller;

import java.io.IOException;
import java.sql.*;
import jakarta.servlet.http.*;

public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws IOException {

        res.setContentType("text/html");

        String user = req.getParameter("username");
        String pass = req.getParameter("password");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/wad",
                "root",
                "root"
            );

            PreparedStatement ps = con.prepareStatement(
                "SELECT * FROM users WHERE username=? AND password=?"
            );

            ps.setString(1, user);
            ps.setString(2, pass);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                res.sendRedirect("catalog.html");
            } else {
                res.getWriter().println("<h2>Invalid Login</h2>");
                res.getWriter().println("<a href='index.html'>Go back</a>");
            }

        } catch (Exception e) {
            e.printStackTrace(res.getWriter());
        }
    }
}