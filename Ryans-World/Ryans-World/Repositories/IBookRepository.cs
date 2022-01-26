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
    }
}
