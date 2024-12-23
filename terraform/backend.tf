terraform {
  backend "s3" {
    bucket         = "live-resume-react"           # S3 bucket name
    key            = "./terraform.tfstate"           # Path to store the state file
    region         = "us-east-1"                           # AWS region for your S3 bucket
    encrypt        = true                                  # Enable encryption for the state file
    acl            = "private"                             # Access control list for the state file
  }
}