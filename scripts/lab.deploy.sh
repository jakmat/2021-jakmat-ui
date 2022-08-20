echo 'Starting lab deployment...'
{
  npm run build-lab
  scp -r -P 222 ../build/* jakmat@s149.cyber-folks.pl:/home/jakmat/domains/jakubmatusiak.com/public_html/lab
  echo 'Lab deployment finished successfully.'
} || {
  echo 'Lab deployment failed!'
}