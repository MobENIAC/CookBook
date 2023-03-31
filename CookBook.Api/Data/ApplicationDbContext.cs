using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CookBook.Api.Models;

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<CookBook.Api.Models.Recipe> Recipe { get; set; } = default!;

        public DbSet<CookBook.Api.Models.Category> Category { get; set; } = default!;

        public DbSet<CookBook.Api.Models.Ingredient> Ingredient { get; set; } = default!;

        public DbSet<User> User { get; set; } = default!;
    }
