using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace spring_app.Controllers.RegistAccount
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistAccountController : ControllerBase
    {
        [HttpPost]
        public String AjaxRegistAccount()
        {
            string test = "test";
            return test;
        }

    }
}
