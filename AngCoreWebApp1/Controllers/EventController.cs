using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Google.Apis.Calendar.v3;
using Google.Apis.Calendar.v3.Data;
using AngCoreWebApp1.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace AngCoreWebApp1.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        // GET: Event
        public ActionResult Index()
        {
            EventHelper eh = new EventHelper();

            var calEvents = eh.GetEvents();

            return Json(calEvents);
            //return View();
        }

        [HttpGet("[action]")]
        public ActionResult Events()
        {
            EventHelper eh = new EventHelper();
            var calEvents = eh.GetEvents();

            return Json(calEvents);
        }


        [HttpGet("details/{id}")]
        // GET: Event/Details/5
        public ActionResult Details(string id)
        {
            EventHelper eh = new EventHelper();
            var eventDetails = eh.GetEvent(id);

            return Json(eventDetails);
        }

        // GET: Event/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Event/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Event/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Event/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Event/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Event/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}