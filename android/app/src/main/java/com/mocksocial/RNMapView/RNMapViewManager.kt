package com.mocksocial.RNMapView

import android.widget.FrameLayout
import android.app.Fragment
import android.view.ViewGroup
import androidx.fragment.app.FragmentActivity
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.google.android.gms.maps.CameraUpdate
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.MapFragment
import com.google.android.gms.maps.model.LatLng

class RNMapViewManager : SimpleViewManager<FrameLayout>() {
    val REACT_CLASS = "RNMapView"
    val FRAGMENT_TAG = "RNMapViewGoogleMapFragment"
    var initialCenter: CameraUpdate? = null

    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(reactContext: ThemedReactContext): FrameLayout {
        var view = FrameLayout(reactContext);
        val activity = reactContext.currentActivity as FragmentActivity
        val fragmentManager = activity.fragmentManager

        var fragment = fragmentManager.findFragmentByTag(FRAGMENT_TAG)
        if (!(fragment is MapFragment)) {
            fragment = MapFragment.newInstance()
            fragmentManager.beginTransaction()
                    .add(fragment as Fragment, FRAGMENT_TAG)
                    .commit();
            fragmentManager.executePendingTransactions()
        } else {
            (fragment.view.parent as ViewGroup).removeView(fragment.view)
        }

        (fragment as MapFragment).getMapAsync { googleMap -> googleMap?.moveCamera(this.initialCenter) }

        view.addView(fragment.view, FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT)
        return view;
    }

    @ReactProp(name = "region")
    fun setRegion(view: FrameLayout, region: ReadableMap) {
        val lat = region.getString("latitude")?.toDouble()
        val lng = region.getString("longitude")?.toDouble()
        val zoom = region.getDouble("googleMapZoom").toFloat()
        if (lat is Double && lng is Double) {
            this.initialCenter = CameraUpdateFactory.newLatLngZoom(LatLng(lat, lng), zoom);
        }
    }
}