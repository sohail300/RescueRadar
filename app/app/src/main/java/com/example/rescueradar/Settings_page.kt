package com.example.rescueradar

import android.app.Dialog
import android.content.Intent
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.cardview.widget.CardView

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

/**
 * A simple [Fragment] subclass.
 * Use the [Settings_page.newInstance] factory method to
 * create an instance of this fragment.
 */
class Settings_page : Fragment() {
    // TODO: Rename and change types of parameters
    private var param1: String? = null
    private var param2: String? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            param1 = it.getString(ARG_PARAM1)
            param2 = it.getString(ARG_PARAM2)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_settings_page, container, false)
        // Inflate the layout for this fragment

        val editProfile = view.findViewById<TextView>(R.id.editprofile)
        val changeLangauge = view.findViewById<TextView>(R.id.langauge)
        val FAQquestion = view.findViewById<TextView>(R.id.faq)
        val Logout = view.findViewById<TextView>(R.id.logout)




        Logout.setOnClickListener {


            val dialog = Dialog(requireActivity()).apply {
                setContentView(R.layout.coustom_dailogue)

                // Find the button in the layout
                val dialogButton = findViewById<Button>(R.id.okay)
                val message = findViewById<TextView>(R.id.tvalertmsg)

                message.text = "Do you really want to logout"

                // Set a click listener for the button
                dialogButton.setOnClickListener {
                    // Dismiss the dialog
                    dismiss()

                    // Navigate to logout option


                }
            }

            dialog.window?.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))
            // Show the dialog
            dialog.show()
        }





        editProfile.setOnClickListener {

            starteditProfile()
        }

        changeLangauge.setOnClickListener {

            startchangeLangauge()
        }

        FAQquestion.setOnClickListener {
            val intent = Intent(requireActivity(),FAQ::class.java)
            startActivity(intent)
        }




        return view
    }

    private fun startchangeLangauge() {

    }

    private fun starteditProfile() {
        val intent = Intent(requireActivity(),editProfile::class.java)
        startActivity(intent)
    }

    companion object {
        /**
         * Use this factory method to create a new instance of
         * this fragment using the provided parameters.
         *
         * @param param1 Parameter 1.
         * @param param2 Parameter 2.
         * @return A new instance of fragment Settings_page.
         */
        // TODO: Rename and change types and number of parameters
        @JvmStatic
        fun newInstance(param1: String, param2: String) =
            Settings_page().apply {
                arguments = Bundle().apply {
                    putString(ARG_PARAM1, param1)
                    putString(ARG_PARAM2, param2)
                }
            }
    }
}