//
//  RNImageViewer.m
//  MockSocial
//
//  Created by Russell on 15/6/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNImageViewer.h"

@implementation RNImageViewer

RCT_EXPORT_MODULE()
RCT_CUSTOM_VIEW_PROPERTY(url, NSString *, UIScrollView) {
  [self loadImage:view url:json];
}

- (UIView *)view {
  UIScrollView *scrollView = [[UIScrollView alloc] init];
  self.imageView = [[UIImageView alloc] init];
  [scrollView addSubview:self.imageView];
  [scrollView setDelegate:self];
  return scrollView;
}

- (void)loadImage:(UIScrollView *)view url:(NSString *)url {
  [[[NSURLSession sharedSession]
    dataTaskWithURL:[NSURL URLWithString:url]
    completionHandler:^(NSData * _Nullable data,
                        NSURLResponse * _Nullable response,
                        NSError * _Nullable error) {
      dispatch_async(dispatch_get_main_queue(), ^{
        UIImage *image = [UIImage imageWithData:data];
        [self.imageView setFrame:CGRectMake(0, 0,
                                            image.size.width,
                                            image.size.height)];
        [self.imageView setImage:image];
        
        CGFloat screenWidth = [[UIScreen mainScreen] bounds].size.width;
        CGFloat minimumScale = screenWidth / image.size.width;
        [view setMinimumZoomScale:minimumScale];
        [view setZoomScale:minimumScale];
        [view setMaximumZoomScale:minimumScale * 2];
        
        CGAffineTransform t = CGAffineTransformScale(CGAffineTransformIdentity,
                                                     minimumScale,
                                                     minimumScale);
        [view setContentSize:CGSizeApplyAffineTransform(image.size, t)];
        [self scrollViewDidZoom:view];
      });
    }] resume];
}

- (UIView *)viewForZoomingInScrollView:(UIScrollView *)scrollView {
  return self.imageView;
}

- (void)scrollViewDidZoom:(UIScrollView *)scrollView {
  CGFloat x = MAX((scrollView.bounds.size.width - scrollView.contentSize.width) / 2, 0);
  CGFloat y = MAX((scrollView.bounds.size.height - scrollView.contentSize.height) / 2, 0);
  [self.imageView setCenter:CGPointMake(scrollView.contentSize.width / 2 + x,
                                        scrollView.contentSize.height / 2 + y)];
}
   
@end
