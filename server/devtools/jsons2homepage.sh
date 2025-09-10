# Run this file from server/devtools

jq -n --slurpfile picturecard ../page_contents/picturecard.json --slurpfile intro ../page_contents/intro.json --slurpfile portfolio ../page_contents/portfolio.json '{picturecard: $picturecard[0], intro: $intro[0], portfolio: $portfolio[0]}' > ../page_contents/home.json
