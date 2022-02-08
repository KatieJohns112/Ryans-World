﻿using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Ryans_World.Models;
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
                                        VALUE (@Content, @CreateDateTime, @BookId, @UserProfildId)";

                    cmd.Parameters.AddWithValue("@Content", comment.Content);
                    cmd.Parameters.AddWithValue("CreateDatetime", comment.CreateDateTime);
                    cmd.Parameters.AddWithValue("BookId", comment.BookId);
                    cmd.Parameters.AddWithValue("UserProfileId", comment.UserProfileId);

                    comment.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
