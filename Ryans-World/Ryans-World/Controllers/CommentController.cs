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
    public class CommentController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly ICommentRepository _commentRepository;
        public CommentController(ICommentRepository commentRepository, IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
            _commentRepository = commentRepository;
        }

        [HttpGet]
        public IActionResult GetAllCommentsByBook()
        {
            var comments = _commentRepository.GetAllComments();
            return Ok(comments);
        }

        [HttpPost]
        public IActionResult AddComment(Comment comment)
        {
            string fireBaseId = GetCurrentUserProfileId();
            var currentUser = _userProfileRepository.GetByFirebaseUserId(fireBaseId);
            comment.UserProfileId = currentUser.Id;
            comment.CreateDateTime = DateTime.Now;
            _commentRepository.Add(comment);
            return CreatedAtAction("Get", new { id = comment.Id }, comment);
        }

        private string GetCurrentUserProfileId()
        {
            string id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return id;
        }

    }
}
