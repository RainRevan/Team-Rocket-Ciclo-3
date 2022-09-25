package ConexionPostgreSQL;
import java.sql.*;
import javax.swing.JOptionPane;
public class ConexionPostgreSQL {
    public static void main(String[] args) {
        String BD = "jdbc:postgresql://localhost:5432/RegistroUsuarios";
        String usuario = "postgres";
        String contrasena = "TeamRocket";

        try {
            Connection conectar = DriverManager.getConnection(BD, usuario, contrasena);
            JOptionPane.showMessageDialog(null, "Base de datos conectada con exito.");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "Error al conectar" + e);
        }
    }
}