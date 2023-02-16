using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoGenesis.Models;

namespace ProjetoGenesis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculoCDBController : ControllerBase
    {
        [HttpGet] 
        public ActionResult<List<calculoCDBModel>> CalcullarCDB() {

            return Ok();
        }
    }
}
