using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using spring_app.Model.RegistAccount;

namespace spring_app.Controllers.RegistAccount
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistAccountController : ControllerBase
    {
        [HttpPost]
        public Dictionary<string, string> AjaxRegistAccount([FromBody] RegistAccountEnt account)
        {
            var accountInfo = new Dictionary<String, String>();
            accountInfo.Add("firstName", account.firstName);
            accountInfo.Add("lastName", account.lastName);
            accountInfo.Add("userId", account.userId);
            accountInfo.Add("password", account.password);
            return accountInfo;
        }

    }
}
