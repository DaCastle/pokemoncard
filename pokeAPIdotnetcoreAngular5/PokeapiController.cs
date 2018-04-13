using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace pokeAPIdotnetcoreAngular5
{
    [Route("api/[controller]")]
    public class PokeapiController : Controller
    {

        [HttpGet("pokemon/{idOrName}")]
        public async Task<IActionResult> GetPokemon(string idOrName)
        {
            using (var client = new HttpClient())
            {
                try
                {
                    client.BaseAddress = new Uri("http://pokeapi.co/api/v2/");
                    var response = await client.GetAsync($"pokemon/{idOrName}");
                    response.EnsureSuccessStatusCode();

                    var result = await response.Content.ReadAsStringAsync();
                    return Ok(result);
                }
                catch (HttpRequestException httpRequestException)
                {
                    return BadRequest($"Error getting pokemon base-level data: {httpRequestException.Message}");
                }
            }
        }

        [HttpGet("sprite/{id}")]
        public string GetSprite(string id)
        {
            return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
