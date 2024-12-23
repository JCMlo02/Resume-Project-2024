resource "aws_cloudfront_distribution" "react_app_distribution" {
  origin {
    domain_name = "live-resume-react.s3-website-us-east-1.amazonaws.com"  # Use the website URL here
    origin_id   = "S3-live-resume-react"
    connection_attempts      = 3
    connection_timeout       = 10

    custom_origin_config {
        http_port                = 80 
        https_port               = 443 
        origin_keepalive_timeout = 5 
        origin_protocol_policy   = "http-only" 
        origin_read_timeout      = 30 
        origin_ssl_protocols     = [ "SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2"]
            }
  }

  aliases = [ "*.y-jacobmlo.com" ]
  tags = {}

  default_cache_behavior {
    target_origin_id = "S3-live-resume-react"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    viewer_protocol_policy = "redirect-to-https"
  }

  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn = "arn:aws:acm:us-east-1:788228759732:certificate/dd3a547a-043e-4489-81f3-cce020926634"
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  price_class = "PriceClass_100"
  enabled = true
}