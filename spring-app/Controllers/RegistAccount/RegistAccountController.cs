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
        public Dictionary<String, String> AjaxRegistAccount()
        {
            var test = new Dictionary<String, String>();
            test.Add("test", "test");
            return　test;
        }

    }
}
