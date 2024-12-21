resource "aws_route53_record" "cloudfront" {
  zone_id = "Z07375901T2ZCOONOL201"  # Replace with your Route 53 hosted zone ID
  name    = "www.y-jacobmlo.com"   # Your custom domain
  type    = "CNAME"
  ttl     = 60
  records = [aws_cloudfront_distribution.react_app_distribution.domain_name]
}