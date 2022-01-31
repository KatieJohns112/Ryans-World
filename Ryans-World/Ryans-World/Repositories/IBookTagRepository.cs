using Ryans_World.Models;
using System.Collections.Generic;

namespace Ryans_World.Repositories
{
    public interface IBookTagRepository
    {
        void Add(BookTag bookTag);
        List<BookTag> GetBookTagsByBookId(int id);
        BookTag GetById(int id);
    }
}