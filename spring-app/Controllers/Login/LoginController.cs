using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace spring_app.Controllers.Login
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private Boolean isCorrectUser(String name, String password)
        {
            String testName = "test";
            String testPass = "password";
            if(testName == name && testPass == password)
            {
                return true;
            }
            return false;

        }

        [HttpGet("{name}/{pass}", Name = "Login")]
        public String AjaxLogin(String name, String pass)
        {
            if (isCorrectUser(name, pass))
            {
                return "200 OK";
            }
            return "500 ERROR";
        }
    }
}
