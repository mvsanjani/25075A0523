package controller;

import java.io.IOException;
import java.sql.*;
import jakarta.servlet.http.*;

public class RegisterServlet extends HttpServlet {

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
                "INSERT INTO users VALUES (?,?)"
            );

            ps.setString(1, user);
            ps.setString(2, pass);

            ps.executeUpdate();

            res.getWriter().println("<h2>Registered Successfully</h2>");
            res.getWriter().println("<a href='index.html'>Login</a>");

        } catch (Exception e) {
            e.printStackTrace(res.getWriter());
        }
    }
}