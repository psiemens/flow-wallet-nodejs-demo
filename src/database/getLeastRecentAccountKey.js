const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

const getLeastRecentAccountKeySql = `
UPDATE account_keys
SET last_used_at = current_timestamp
WHERE index = (
  SELECT index
  FROM account_keys
  ORDER BY last_used_at
  LIMIT 1
)
RETURNING index
`

const getLeastRecentAccountKey = async () => {
  const results = await prisma.$queryRaw(getLeastRecentAccountKeySql)
  return results[0].index
}

module.exports = getLeastRecentAccountKey
