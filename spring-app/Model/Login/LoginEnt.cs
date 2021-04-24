using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace spring_app.Model.Login
{
    public class LoginEnt : Controller
    {
        public String name { get; set; }

        public String password { get; set;}
    }
}
