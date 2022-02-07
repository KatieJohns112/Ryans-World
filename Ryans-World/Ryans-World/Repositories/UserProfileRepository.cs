using Microsoft.Extensions.Configuration;
using Ryans_World.Models;
using Ryans_World.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ryans_World.Repositories
{
        public class UserProfileRepository : BaseRepository, IUserProfileRepository
        {
            public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

            public UserProfile GetByFirebaseUserId(string firebaseUserId)
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                        SELECT up.Id, up.FireBaseUserId, up.FirstName, up.LastName, up.DisplayName, 
                               up.Email, up.ImageLocation
                        FROM UserProfile up
                        WHERE up.FireBaseUserId = @FireBaseUserId";

                        DbUtils.AddParameter(cmd, "@FireBaseUserId", firebaseUserId);

                        UserProfile userProfile = null;

                        var reader = cmd.ExecuteReader();
                        if (reader.Read())
                        {
                            userProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                FireBaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                DisplayName = DbUtils.GetString(reader, "DisplayName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            };
                        }
                        reader.Close();

                        return userProfile;
                    }
                }
            }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserProfile (FireBaseUserId, FirstName, LastName, DisplayName, 
                                                                 Email, ImageLocation)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FireBaseUserId, @FirstName, @LastName, @DisplayName, 
                                                @Email, @ImageLocation)";
                    DbUtils.AddParameter(cmd, "@FireBaseUserId", userProfile.FireBaseUserId);
                    DbUtils.AddParameter(cmd, "@FirstName", userProfile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", userProfile.LastName);
                    DbUtils.AddParameter(cmd, "@DisplayName", userProfile.DisplayName);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@ImageLocation", userProfile.ImageLocation);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}

