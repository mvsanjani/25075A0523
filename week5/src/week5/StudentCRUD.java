package week5;
import java.sql.*;
import java.util.Scanner;

public class StudentCRUD {

    public static void main(String[] args) throws Exception {

        // CONNECT TO DATABASE
        Class.forName("com.mysql.cj.jdbc.Driver");

        Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/wad",
            "root",
            "root"
        );

        System.out.println("Connected to MySQL");

        Scanner sc = new Scanner(System.in);

        while (true) {

            System.out.println("\n1.Insert 2.Display 3.Update 4.Delete 5.Exit");
            int choice = sc.nextInt();

            switch (choice) {

                case 1: // INSERT
                    System.out.print("Enter Name: ");
                    String name = sc.next();

                    System.out.print("Enter Email: ");
                    String email = sc.next();

                    System.out.print("Enter Age: ");
                    int age = sc.nextInt();

                    PreparedStatement ps1 = con.prepareStatement(
                        "insert into students values(?,?,?)"
                    );

                    ps1.setString(1, name);
                    ps1.setString(2, email);
                    ps1.setInt(3, age);

                    ps1.executeUpdate();
                    System.out.println("Record Inserted");
                    break;

                case 2: // DISPLAY
                    Statement st = con.createStatement();
                    ResultSet rs = st.executeQuery("select * from students");

                    while (rs.next()) {
                        System.out.println(
                            rs.getString(1) + " " +
                            rs.getString(2) + " " +
                            rs.getInt(3)
                        );
                    }
                    break;

                case 3: // UPDATE
                    System.out.print("Enter Name to Update: ");
                    String uname = sc.next();

                    System.out.print("Enter New Age: ");
                    int newAge = sc.nextInt();

                    PreparedStatement ps2 = con.prepareStatement(
                        "update students set age=? where name=?"
                    );

                    ps2.setInt(1, newAge);
                    ps2.setString(2, uname);

                    ps2.executeUpdate();
                    System.out.println("Record Updated");
                    break;

                case 4: // DELETE
                    System.out.print("Enter Name to Delete: ");
                    String dname = sc.next();

                    PreparedStatement ps3 = con.prepareStatement(
                        "delete from students where name=?"
                    );

                    ps3.setString(1, dname);

                    ps3.executeUpdate();
                    System.out.println("Record Deleted");
                    break;

                case 5: // EXIT
                    System.out.println("Exiting...");
                    System.exit(0);

                default:
                    System.out.println("Invalid Choice");
            }
        }
    }
}