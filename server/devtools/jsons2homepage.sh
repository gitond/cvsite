jq -n --slurpfile picturecard ../page_contents/picturecard.json --slurpfile intro ../page_contents/intro.json '{picturecard: $picturecard[0], intro: $intro[0]}' > ../page_contents/home.json
