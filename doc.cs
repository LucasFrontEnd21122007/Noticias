using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

class Program {
    static void Main() {
        TcpListener server = null;
        try {
            int port = 8080;
            IPAddress localAddr = IPAddress.Parse("127.0.0.1");

            server = new TcpListener(localAddr, port);

            server.Start();

            Console.WriteLine($"Servidor aguardando conexões na porta {port}...");

            TcpClient client = server.AcceptTcpClient();
            NetworkStream stream = client.GetStream();

            byte[] data = new byte[1024];
            int bytesRead = stream.Read(data, 0, data.Length);
            string message = Encoding.ASCII.GetString(data, 0, bytesRead);
            Console.WriteLine($"Mensagem recebida: {message}");

            byte[] response = Encoding.ASCII.GetBytes("Olá do servidor!");
            stream.Write(response, 0, response.Length);

            client.Close();
            server.Stop();
        } catch (Exception e) {
            Console.WriteLine($"Erro: {e.Message}");
        }
    }
}