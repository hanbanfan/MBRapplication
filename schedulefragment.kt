package com.example.webradioapp

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class ScheduleFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_schedule, container, false)

        val recyclerView: RecyclerView = view.findViewById(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(requireContext())
        recyclerView.adapter = ScheduleAdapter(getSampleSchedule())

        return view
    }

    private fun getSampleSchedule(): List<Show> {
        return listOf(
            Show("Morning Jazz", "9:00 AM"),
            Show("Tech Talk", "12:00 PM"),
            Show("Live DJ Set", "6:00 PM")
        )
    }
}
