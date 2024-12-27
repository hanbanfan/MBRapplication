package com.example.webradioapp

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.fragment.app.Fragment

class DonateFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_donate, container, false)

        val donateButton: Button = view.findViewById(R.id.donateButton)
        donateButton.setOnClickListener {
            val donationUrl = "https://example-donation-page.com"
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(donationUrl))
            startActivity(intent)
        }

        return view
    }
}
