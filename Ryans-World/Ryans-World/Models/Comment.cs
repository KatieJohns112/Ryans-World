using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ryans_World.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
        public string Content { get; set; }
        public DateTime CreateDateTime { get; set; }
        public Book Book { get; set; }
        public int BookId { get; set; }
    }
}
