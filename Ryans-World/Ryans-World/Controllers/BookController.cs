using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ryans_World.Models;
using Ryans_World.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Ryans_World.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public BookController(IBookRepository bookRepository, IUserProfileRepository userProfileRepository)
        {
            _bookRepository = bookRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_bookRepository.GetAll());
        }

        [Authorize]
        [HttpPost]
        public IActionResult AddBook(Book book)
        {
            var currentUserProfile = GetCurrentUserProfile();
            book.UserProfileId = currentUserProfile.Id;
            book.CategoryId = 1;
            _bookRepository.Add(book);
            return CreatedAtAction("Get", new { id = book.Id }, book);
        }

        private UserProfile GetCurrentUserProfile()
        {
            var fireBaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(fireBaseUserId);
        }
    }
}
