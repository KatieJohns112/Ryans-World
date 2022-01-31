using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Ryans_World.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ryans_World.Repositories
{
    public class BookTagRepository : BaseRepository, IBookTagRepository
    {
        public BookTagRepository(IConfiguration config) : base(config) { }
        public BookTag GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT BookId, TagId 
                                        FROM BookTag
                                        WHERE Id = @id";

                    cmd.Parameters.AddWithValue("id", id);
                    var reader = cmd.ExecuteReader();

                    BookTag bookTag = new BookTag();

                    if (reader.Read())
                    {
                        bookTag.Id = id;
                        bookTag.BookId = reader.GetInt32(reader.GetOrdinal("BookId"));
                        bookTag.TagId = reader.GetInt32(reader.GetOrdinal("TagId"));
                    }
                    reader.Close();

                    return bookTag;
                }
            }
        }

        public List<BookTag> GetBookTagsByBookId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT bt.Id, bt.BookId, bt.TagId, t.Name
                                        FROM BookTag bt
                                        LEFT JOIN Tag t ON t.Id = bt.TagId
                                        WHERE bt.bookid = @id;";

                    cmd.Parameters.AddWithValue("@id", id);
                    var reader = cmd.ExecuteReader();

                    List<BookTag> bookTags = new List<BookTag> { };

                    while (reader.Read())
                    {
                        BookTag bookTag = new BookTag()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            BookId = reader.GetInt32(reader.GetOrdinal("BookId")),
                            TagId = reader.GetInt32(reader.GetOrdinal("TagId")),
                            Tag = new Tag()
                            {
                                Name = reader.GetString(reader.GetOrdinal("Name")),
                            }
                        };

                        bookTags.Add(bookTag);
                    }

                    reader.Close();

                    return bookTags;
                }
            }
        }

        public void Add(BookTag bookTag)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO BookTag (BookId, TagId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@bookId, @tagId)";

                    cmd.Parameters.AddWithValue("bookId", bookTag.BookId);
                    cmd.Parameters.AddWithValue("tagId", bookTag.TagId);

                    int id = (int)cmd.ExecuteScalar();

                    bookTag.Id = id;
                }
            }
        }
    }
}
