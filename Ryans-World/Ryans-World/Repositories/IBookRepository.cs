using Ryans_World.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ryans_World.Repositories
{
    public interface IBookRepository
    {
        List<Book> GetAll();
        void Add(Book book);
        void Delete(int bookId);
        void Update(Book book);
        Book GetBookById(int id);
        List<Book> GetBooksByUserId(int id);
    }
}
