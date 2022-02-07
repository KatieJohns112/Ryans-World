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
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }

        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, Name
                                        FROM Category
                                        ORDER BY Name ASC";
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var categories = new List<Category>();
                        while (reader.Read())
                        {
                            categories.Add(new Category()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            });
                        }
                        return categories;
                    }
                }
            }
        }

        public void Add(Category category)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Category (Name)
                                        VALUES (@Name)";
                    cmd.Parameters.AddWithValue("@Name", category.Name);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
