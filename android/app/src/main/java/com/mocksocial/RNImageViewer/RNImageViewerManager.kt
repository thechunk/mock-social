package com.mocksocial.RNImageViewer

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.github.chrisbanes.photoview.PhotoView
import com.squareup.picasso.Picasso

class RNImageViewerManager: SimpleViewManager<PhotoView>() {
    val REACT_CLASS = "RNImageViewer"

    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(reactContext: ThemedReactContext): PhotoView {
        return PhotoView(reactContext);
    }

    @ReactProp(name = "url")
    fun setUrl(view: PhotoView, url: String) {
        Picasso.with(view.context).load(url).into(view);
    }
}