using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using spring_app.Model.Login;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;

namespace spring_app.Controllers.Login
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        [HttpPost]
        public Dictionary<string, string> AjaxLogin([FromBody] LoginEnt loginUser)
        {
            //Login.tsxから受け取った値を変数に格納する
            string userName = loginUser.userName;
            string userPassword = loginUser.password;

            String loginStatus = isCorrectUser(userName, userPassword);

            // ログイン結果をDictionary型にして返す
            var loginResult = new Dictionary<String, String>();
            loginResult.Add("loginStatus", loginStatus);
            //loginResult.Add("result", loginStatus);
            return loginResult;

        }


        public String isCorrectUser(String userName, String userPassword)
        {
            //DB接続情報
            string Server = "127.0.0.1";
            int Port = 3306;
            string Database = "test_spring";
            string dbId = "root";
            string dbPassword = "reiko1222";

            //mysqlに接続する為のコマンド
            string ConnectionString = $"Server={Server}; Port={Port}; Database={Database}; Uid={dbId}; Pwd={dbPassword}";

            //ログインするアカウントが存在するかどうか確かめるSQL文を発行
            string SelectLoginData =
                $"SELECT * FROM mst_user WHERE user_id = '{userName}' AND password = '{userPassword}'";

            //ログイン結果を格納する変数を用意
            string loginStatus = "";

            try
            {
                using (MySqlConnection con = new MySqlConnection(ConnectionString))
                {
                    using (MySqlCommand cmd = new MySqlCommand(SelectLoginData, con))
                    {
                        using (MySqlDataAdapter adapter = new MySqlDataAdapter(cmd))
                        {
                            DataTable dataTable = new DataTable();
                            adapter.Fill(dataTable);
                            int rowcount = dataTable.Rows.Count;

                            if (rowcount == 1)
                            {
                                loginStatus = "1";
                            }
                            else
                            {
                                loginStatus = "0";
                            }
                        }
                    }
                }
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }

            return loginStatus;
        }

    }
}
