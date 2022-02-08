using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Ryans_World.Models;
using Ryans_World.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ryans_World.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuartion) : base(configuartion) { }

        public List<Comment> GetAllComments()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT c.Id, c.Content, c.BookId, c.UserProfileId, c.CreateDateTime, c.UserProfileId,
                                        b.Id as bookId, b.Title, u.DisplayName, u.ImageLocation
                                        FROM Comment c
                                        JOIN UserProfile u ON c.UserProfileId = u.Id
                                        JOIN Book b ON c.BookId = b.Id";
                                

                    var reader = cmd.ExecuteReader();
                    List<Comment> comments = new List<Comment>();

                    while (reader.Read())
                    {
                        Comment comment = new Comment()
                        {
                            Content = reader.GetString(reader.GetOrdinal("content")),
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            CreateDateTime = reader.GetDateTime(reader.GetOrdinal("createDateTime")),
                            BookId = reader.GetInt32(reader.GetOrdinal("BookId")),
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            UserProfile = new UserProfile()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                DisplayName = reader.GetString(reader.GetOrdinal("displayName")),
                                ImageLocation = reader.GetString(reader.GetOrdinal("imageLocation"))
                            },
                            Book = new Book()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("bookId")),
                                Title = reader.GetString(reader.GetOrdinal("title"))
                            }
                        };
                        comments.Add(comment);
                    }
                    reader.Close();
                    return comments;
                }
            }
        }

        public void Add(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Comment (Content, CreateDateTime, BookId, UserProfileId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@Content, @CreateDateTime, @BookId, @UserProfileId)";

                    cmd.Parameters.AddWithValue("@Content", comment.Content);
                    cmd.Parameters.AddWithValue("@CreateDatetime", comment.CreateDateTime);
                    cmd.Parameters.AddWithValue("@BookId", comment.BookId);
                    cmd.Parameters.AddWithValue("@UserProfileId", comment.UserProfileId);

                    comment.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM Comment WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Update(Comment comment)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {

                    cmd.CommandText = @"UPDATE Comment
                                        SET Content = @content                                        
                                        WHERE id = @id";

                    cmd.Parameters.AddWithValue("@content", comment.Content);
                    cmd.Parameters.AddWithValue("@id", comment.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public Comment GetCommentById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                               SELECT Id, Content, CreateDateTime, BookId
                               FROM Comment
                               WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);
                    Comment comment = null;

                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        if (comment == null)
                        {
                            comment = new Comment()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                BookId = reader.GetInt32(reader.GetOrdinal("BookId")),
                                Content = reader.GetString(reader.GetOrdinal("Content")),
                                CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CreateDateTime"))
                            };
                        }
                    }
                    reader.Close();
                    return comment;
                }
            }
        }
    }
}
