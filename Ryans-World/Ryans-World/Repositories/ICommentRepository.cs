using Ryans_World.Models;
using System.Collections.Generic;

namespace Ryans_World.Repositories
{
    public interface ICommentRepository
    {
        void Add(Comment comment);
        List<Comment> GetAllComments();
        void Delete(int id);
    }
}