//
//  RNImageViewer.h
//  MockSocial
//
//  Created by Russell on 15/6/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "React/RCTViewManager.h"

NS_ASSUME_NONNULL_BEGIN

@interface RNImageViewer : RCTViewManager <UIScrollViewDelegate>

@property (nonatomic, strong) UIImageView *imageView;

@end

NS_ASSUME_NONNULL_END
