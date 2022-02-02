using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ryans_World.Models;
using Ryans_World.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ryans_World.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookTagController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;
        private readonly IBookTagRepository _bookTagRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public BookTagController(IBookRepository bookRepository, IBookTagRepository bookTagRepository, IUserProfileRepository userProfileRepository)
        {
            _bookRepository = bookRepository;
            _bookTagRepository = bookTagRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var bookTag = _bookTagRepository.GetById(id);
            return Ok(bookTag);
        }

        [HttpGet("bookTags/{id}")]
        public IActionResult GetByBookId(int id)
        {
            var bookTags = _bookTagRepository.GetBookTagsByBookId(id);
            return Ok(bookTags);
        }

        [HttpPost]
        public IActionResult Post(BookTag bookTag)
        {
            _bookTagRepository.Add(bookTag);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _bookTagRepository.Delete(id);
            return NoContent();
        }
    }
}
