﻿using Ryans_World.Models;
using System.Collections.Generic;

namespace Ryans_World.Repositories
{
    public interface ITagRepository
    {
        List<Tag> GetAll();
        void Add(Tag tag);
        void Delete(int id);
    }
}