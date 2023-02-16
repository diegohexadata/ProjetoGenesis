using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace ProjetoGenesis.Data
{
    public class CalculoCDBDBContext : DbContext
    {
        public CalculoCDBDBContext(DbContextOptions<CalculoCDBDBContext> options)
            : Base(options)
        {
        }

        public DbSet<CalculoCDBDBContext> CalculoCDB { get; set; }
    }

    protected override void OnModelCreating(ModelBuilder modelBilder)
    {
    }
}
