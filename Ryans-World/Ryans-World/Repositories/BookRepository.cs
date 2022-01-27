﻿using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Ryans_World.Models;
using Ryans_World.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ryans_World.Repositories
{
    public class BookRepository : BaseRepository, IBookRepository
    {
        public BookRepository(IConfiguration configuration) : base(configuration) { }

        public List<Book> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT b.Id, b.Title, b.Author, b.DayOfWeek, b.FavoriteScale, 
                                        b.ImageLocation, b.UserProfileId, b.CategoryId, c.Name AS CategoryName,
                                        u.Id AS UserId, u.DisplayName, u.FirstName, u.LastName, u.Email, u.ImageLocation AS UserImage
                                        FROM Book b 
                                        LEFT JOIN Category c
                                        ON b.CategoryId = c.Id
                                        LEFT JOIN UserProfile u
                                        ON b.UserProfileId = u.Id
                                        ORDER BY Name ASC";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var books = new List<Book>();
                        while (reader.Read())
                        {
                            books.Add(new Book()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Author = DbUtils.GetString(reader, "Author"),
                                DayOfWeek = DbUtils.GetString(reader, "DayOfWeek"),
                                FavoriteScale = DbUtils.GetInt(reader, "FavoriteScale"),
                                ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                                CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                                Category = new Category()
                                {
                                    Id = DbUtils.GetInt(reader, "Id"),
                                    Name = DbUtils.GetString(reader, "CategoryName")
                                },
                                UserProfileId = DbUtils.GetInt(reader, "UserId"),
                                UserProfile = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"),
                                    DisplayName = DbUtils.GetString(reader, "DisplayName"),
                                    FirstName = DbUtils.GetString(reader, "FirstName"),
                                    LastName = DbUtils.GetString(reader, "LastName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    ImageLocation = DbUtils.GetString(reader, "ImageLocation")
                                }
                            });
                        }
                        return books;
                    }
                }
            }
        }

        public void Add(Book book)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Book (Title, Author, DayOfWeek, FavoriteScale,
                                        UserProfileId, CategoryId, ImageLocation)
                                        OUTPUT INSERTED.ID
                                        VALUES (@Title, @Author, @DayOfWeek, @FavoriteScale, @UserProfileId,
                                        @CategoryId, @ImageLocation)";

                    cmd.Parameters.AddWithValue("@Title", book.Title);
                    cmd.Parameters.AddWithValue("@Author", book.Author);
                    cmd.Parameters.AddWithValue("@DayOfWeek", book.DayOfWeek);
                    cmd.Parameters.AddWithValue("@FavoriteScale", book.FavoriteScale);
                    cmd.Parameters.AddWithValue("@UserProfileId", book.UserProfileId);
                    cmd.Parameters.AddWithValue("@CategoryId", book.CategoryId);
                    cmd.Parameters.AddWithValue("@ImageLocation", book.ImageLocation);

                    book.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
