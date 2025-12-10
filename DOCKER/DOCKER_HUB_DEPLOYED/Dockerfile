# ye hm isi liye bnary hen taky jb hm isko deploy kry or koi dosra use kr to ye sb kam osko ho jay automatic
# ye chizen khod krdega docker
#base image
FROM node:18-alpine

#working directory to collect all folder
WORKDIR /app

#ye braber sy sari pekig sy start hony wali files otha kr rakhlyga 
COPY package*.json ./

# npm intall ki cmmmand run kro ab
RUN npm install

# ab jo files bachi hen sb le ao phly . ka matlb current directory sy lao or dosry . ka matlb current directory m rakhdo
COPY . .

#port expose krdo
EXPOSE 8000

#command to run the app
CMD ["node", "server.js"]
