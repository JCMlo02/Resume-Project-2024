resource "aws_s3_bucket" "react_app" {
  bucket = "live-resume-react"  # Choose a globally unique name for your bucket
  }
  
resource "aws_s3_bucket_website_configuration" "react_app_website" {
  bucket = aws_s3_bucket.react_app.bucket

  index_document {
    suffix = "index.html"
  }
}