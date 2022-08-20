echo 'Starting production deployment...'
read -p "Wish to continue? [y/n]" -n 1 -r
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi
{
  npm run build:production
  scp -r -P 222 ../build/* jakmat@s149.cyber-folks.pl:/home/jakmat/domains/jakubmatusiak.com/public_html
  echo 'Production deployment finished successfully.'
} || {
  echo 'Production deployment failed!'
}